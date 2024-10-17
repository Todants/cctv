import React, { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
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

export default function CameraManagementPage() {
  const [cameras, setCameras] = useState<Prisma.CameraGetPayload<{}>[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: camerasData,
    isLoading,
    refetch,
  } = Api.camera.findMany.useQuery({})
  const { mutateAsync: createCamera } = Api.camera.create.useMutation()
  const { mutateAsync: updateCamera } = Api.camera.update.useMutation()
  const { mutateAsync: deleteCamera } = Api.camera.delete.useMutation()

  useEffect(() => {
    if (camerasData) {
      setCameras(camerasData)
    }
  }, [camerasData])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleSubmit = async (values: any) => {
    try {
      if (values.id) {
        await updateCamera({ where: { id: values.id }, data: values })
        message.success('Camera updated successfully')
      } else {
        await createCamera({ data: values })
        message.success('Camera added successfully')
      }
      refetch()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteCamera({ where: { id } })
      message.success('Camera deleted successfully')
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <span>
          <Button
            onClick={() => {
              form.setFieldsValue(record)
              showModal()
            }}
          >
            <i className="las la-edit"></i> Edit
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            style={{ marginLeft: 8 }}
            danger
          >
            <i className="las la-trash"></i> Delete
          </Button>
        </span>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Camera Management</Title>
        <Text>
          Manage your surveillance system cameras, add new ones, or update
          existing camera settings.
        </Text>

        <div style={{ marginTop: 24, marginBottom: 16 }}>
          <Button type="primary" onClick={showModal}>
            <i className="las la-plus"></i> Add New Camera
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={cameras}
          rowKey="id"
          loading={isLoading}
        />

        <Modal
          title={form.getFieldValue('id') ? 'Edit Camera' : 'Add New Camera'}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="Active">Active</Select.Option>
                <Select.Option value="Inactive">Inactive</Select.Option>
                <Select.Option value="Maintenance">Maintenance</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {form.getFieldValue('id') ? 'Update Camera' : 'Add Camera'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
