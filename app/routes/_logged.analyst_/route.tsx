import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Checkbox,
  Select,
  Button,
  Table,
  Space,
  DatePicker,
  TimePicker,
  Pagination,
} from 'antd'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AnalystPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const [filters, setFilters] = useState({})

  const {
    data: incidents,
    isLoading,
    refetch,
  } = Api.incident.findMany.useQuery({
    include: {
      incidentType: true,
      incidentGroup: true,
      camera: true,
      surveillanceObject: true,
      department: true,
    },
    where: filters,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  })

  const { data: incidentTypes } = Api.incidentType.findMany.useQuery()
  const { data: incidentGroups } = Api.incidentGroup.findMany.useQuery()
  const { data: departments } = Api.department.findMany.useQuery()
  const { data: surveillanceObjects } =
    Api.surveillanceObject.findMany.useQuery()

  const handleSearch = (values: any) => {
    const newFilters: any = {}
    if (values.dateRange) {
      newFilters.timestamp = {
        gte: values.dateRange[0].toISOString(),
        lte: values.dateRange[1].toISOString(),
      }
    }
    if (values.group) newFilters.incidentGroupId = values.group
    if (values.incidentType) newFilters.incidentTypeId = values.incidentType
    if (values.vehicleNumber) newFilters.vehicleNumber = { contains: values.vehicleNumber }
    if (values.wagonNumber) newFilters.wagonNumber = { contains: values.wagonNumber }
    if (values.attributeValue) newFilters.attributeValue = { contains: values.attributeValue }
    if (values.comments) newFilters.comments = { contains: values.comments }
    if (values.priority) newFilters.priority = values.priority
    if (values.status) newFilters.status = values.status
    if (values.department) newFilters.departmentId = values.department
    if (values.surveillanceObject) newFilters.surveillanceObjectId = values.surveillanceObject

    setFilters(newFilters)
    setCurrentPage(1)
    refetch()
  }

  const handleReset = () => {
    form.resetFields()
    refetch()
  }

  const columns = [
    {
      title: 'Incident Number',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'date',
      render: (timestamp: string) => dayjs(timestamp).format('YYYY-MM-DD'),
    },
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'time',
      render: (timestamp: string) => dayjs(timestamp).format('HH:mm:ss'),
    },
    {
      title: 'Group',
      dataIndex: ['incidentGroup', 'name'],
      key: 'group',
    },
    {
      title: 'Surveillance Object',
      dataIndex: ['surveillanceObject', 'name'],
      key: 'surveillanceObject',
    },
    {
      title: 'Department',
      dataIndex: ['department', 'name'],
      key: 'department',
    },
    {
      title: 'Incident Type',
      dataIndex: ['incidentType', 'name'],
      key: 'incidentType',
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
        <Space size="middle">
          <Button onClick={() => handleViewHistory(record.id)}>
            View History
          </Button>
        </Space>
      ),
    },
  ]

  const handleViewHistory = (incidentId: string) => {
    // Implement view history logic here
    console.log('View history for incident:', incidentId)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>Incident Analysis</Title>
        <Text>
          Filter and analyze incidents to quickly review and act on specific
          events.
        </Text>

        <Form
          form={form}
          onFinish={handleSearch}
          layout="inline"
          style={{ marginTop: '24px' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between' }}>
            <Form.Item name="dateRange" label="Date and Time Range" style={{ flex: '1 1 300px' }}>
              <RangePicker showTime style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="specificHours" valuePropName="checked" style={{ flex: '0 0 auto' }}>
              <Checkbox>Specific Hours</Checkbox>
            </Form.Item>
            <Form.Item name="group" label="Group" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                {incidentGroups?.map(group => (
                  <Select.Option key={group.id} value={group.id}>
                    {group.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="incidentType" label="Incident Type" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                {incidentTypes?.map(type => (
                  <Select.Option key={type.id} value={type.id}>
                    {type.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="vehicleNumber" label="Vehicle Number" style={{ flex: '1 1 200px' }}>
              <Input />
            </Form.Item>
            <Form.Item name="wagonNumber" label="Wagon Number" style={{ flex: '1 1 200px' }}>
              <Input />
            </Form.Item>
            <Form.Item name="attributeValue" label="Attribute Value" style={{ flex: '1 1 200px' }}>
              <Input />
            </Form.Item>
            <Form.Item name="comments" label="Comments" style={{ flex: '1 1 300px' }}>
              <Input.TextArea rows={1} />
            </Form.Item>
            <Form.Item name="priority" label="Priority" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                <Select.Option value="low">Low</Select.Option>
                <Select.Option value="medium">Medium</Select.Option>
                <Select.Option value="high">High</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="status" label="Status" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                <Select.Option value="new">New</Select.Option>
                <Select.Option value="resolved">Resolved</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="department" label="Department" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                {departments?.map(dept => (
                  <Select.Option key={dept.id} value={dept.id}>
                    {dept.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="surveillanceObject" label="Surveillance Object" style={{ flex: '1 1 200px' }}>
              <Select style={{ width: '100%' }}>
                {surveillanceObjects?.map(obj => (
                  <Select.Option key={obj.id} value={obj.id}>
                    {obj.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item style={{ marginTop: '16px', width: '100%' }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button onClick={handleReset}>Reset</Button>
            </Space>
          </Form.Item>
        </Form>

        <Table
          columns={columns}
          dataSource={incidents}
          rowKey="id"
          loading={isLoading}
          pagination={false}
          style={{ marginTop: '24px' }}
        />

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={incidents?.length || 0}
          onChange={(page, pageSize) => {
            setCurrentPage(page)
            setPageSize(pageSize)
          }}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
          style={{ marginTop: '16px', textAlign: 'right' }}
        />
      </div>
    </PageLayout>
  )
}
