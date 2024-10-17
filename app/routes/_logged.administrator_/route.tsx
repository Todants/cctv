import React, { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Pagination,
  message,
} from 'antd'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdministratorPage() {
  const { user, checkRole } = useUserContext()
  const navigate = useNavigate()
  const [roles, setRoles] = useState<Prisma.RoleDataGetPayload<{}>[]>([])
  const [users, setUsers] = useState<Prisma.UserGetPayload<{}>[]>([])
  const [selectedRole, setSelectedRole] =
    useState<Prisma.RoleDataGetPayload<{}> | null>(null)
  const [isRoleModalVisible, setIsRoleModalVisible] = useState(false)
  const [isUserModalVisible, setIsUserModalVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const { data: rolesData, refetch: refetchRoles } =
    Api.roleData.findMany.useQuery({})
  const { data: usersData, refetch: refetchUsers } = Api.user.findMany.useQuery(
    {},
  )
  const { mutateAsync: createRole } = Api.roleData.create.useMutation()
  const { mutateAsync: deleteRole } = Api.roleData.delete.useMutation()
  const { mutateAsync: createUser } = Api.user.create.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  useEffect(() => {
    if (rolesData) setRoles(rolesData)
    if (usersData) setUsers(usersData)
  }, [rolesData, usersData])

  if (!checkRole('ADMIN')) {
    navigate('/home')
    return null
  }

  const handleAddRole = async (values: { name: string }) => {
    try {
      await createRole({ data: values })
      message.success('Role added successfully')
      refetchRoles()
      setIsRoleModalVisible(false)
    } catch (error) {
      message.error('Failed to add role')
    }
  }

  const handleDeleteRole = async (id: string) => {
    try {
      await deleteRole({ where: { id } })
      message.success('Role deleted successfully')
      refetchRoles()
    } catch (error) {
      message.error('Failed to delete role')
    }
  }

  const handleAddUser = async (values: {
    name: string
    email: string
    password: string
    globalRole: string
  }) => {
    try {
      await createUser({ data: values })
      message.success('User added successfully')
      refetchUsers()
      setIsUserModalVisible(false)
    } catch (error) {
      message.error('Failed to add user')
    }
  }

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser({ where: { id } })
      message.success('User deleted successfully')
      refetchUsers()
    } catch (error) {
      message.error('Failed to delete user')
    }
  }

  const handleResetPassword = async (id: string) => {
    try {
      await updateUser({ where: { id }, data: { password: 'defaultPassword' } })
      message.success('Password reset successfully')
    } catch (error) {
      message.error('Failed to reset password')
    }
  }

  const roleColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Prisma.RoleDataGetPayload<{}>) => (
        <Button onClick={() => handleDeleteRole(record.id)} danger>
          Delete
        </Button>
      ),
    },
  ]

  const userColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Global Role', dataIndex: 'globalRole', key: 'globalRole' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Prisma.UserGetPayload<{}>) => (
        <>
          <Button
            onClick={() => handleDeleteUser(record.id)}
            danger
            style={{ marginRight: '8px' }}
          >
            Delete
          </Button>
          <Button onClick={() => handleResetPassword(record.id)}>
            Reset Password
          </Button>
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Administrator Dashboard</Title>
        <Text>Manage roles, permissions, and users in the system.</Text>

        <div style={{ marginTop: '24px' }}>
          <Title level={3}>Roles Management</Title>
          <Button
            onClick={() => setIsRoleModalVisible(true)}
            type="primary"
            style={{ marginBottom: '16px' }}
          >
            <i className="las la-plus"></i> Add Role
          </Button>
          <Table
            dataSource={roles}
            columns={roleColumns}
            rowKey="id"
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: roles.length,
              onChange: page => setCurrentPage(page),
              onShowSizeChange: (current, size) => setPageSize(size),
            }}
          />
        </div>

        <div style={{ marginTop: '24px' }}>
          <Title level={3}>Users Management</Title>
          <Button
            onClick={() => setIsUserModalVisible(true)}
            type="primary"
            style={{ marginBottom: '16px' }}
          >
            <i className="las la-user-plus"></i> Add User
          </Button>
          <Table
            dataSource={users}
            columns={userColumns}
            rowKey="id"
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: users.length,
              onChange: page => setCurrentPage(page),
              onShowSizeChange: (current, size) => setPageSize(size),
            }}
          />
        </div>

        <Modal
          title="Add Role"
          visible={isRoleModalVisible}
          onCancel={() => setIsRoleModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleAddRole}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Please input the role name!' },
              ]}
            >
              <Input placeholder="Role Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Role
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Add User"
          visible={isUserModalVisible}
          onCancel={() => setIsUserModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleAddUser}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Please input the user name!' },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input the user email!' },
              ]}
            >
              <Input placeholder="User Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input the user password!' },
              ]}
            >
              <Input.Password placeholder="User Password" />
            </Form.Item>
            <Form.Item
              name="globalRole"
              rules={[
                { required: true, message: 'Please select the global role!' },
              ]}
            >
              <Select placeholder="Select Global Role">
                <Select.Option value="USER">User</Select.Option>
                <Select.Option value="ADMIN">Admin</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add User
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
