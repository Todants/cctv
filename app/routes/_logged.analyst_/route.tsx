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
  Modal,
  Image,
  Row,
  Col,
  Radio,
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
  const [selectedIncident, setSelectedIncident] = useState(null)
  const [mediaType, setMediaType] = useState('photo')

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

  const { data: incidentHistory } = Api.incident.findMany.useQuery({
    where: { id: selectedIncident?.id },
    include: {
      incidentType: true,
    },
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
        <Space size="small">
          <Button onClick={() => handleViewHistory(record)} size="small">
            View History
          </Button>
        </Space>
      ),
    },
  ]

  const handleViewHistory = (incident: any) => {
    setSelectedIncident(incident)
  }

  const historyColumns = [
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
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row gutter={16} style={{ height: '100vh' }}>
        <Col span={24}>
          <Form
            form={form}
            onFinish={handleSearch}
            layout="inline"
            style={{ marginTop: '8px', width: '100%' }}
            size="small"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between' }}>
              <Form.Item name="dateRange" label="Date and Time Range" style={{ flex: '1 1 300px' }}>
                <RangePicker showTime style={{ width: '100%' }} size="small" />
              </Form.Item>
              <Form.Item name="specificHours" valuePropName="checked" style={{ flex: '0 0 auto' }}>
                <Checkbox>Specific Hours</Checkbox>
              </Form.Item>
              <Form.Item name="group" label="Group" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  {incidentGroups?.map(group => (
                    <Select.Option key={group.id} value={group.id}>
                      {group.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="incidentType" label="Incident Type" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  {incidentTypes?.map(type => (
                    <Select.Option key={type.id} value={type.id}>
                      {type.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="vehicleNumber" label="Vehicle Number" style={{ flex: '1 1 200px' }}>
                <Input size="small" />
              </Form.Item>
              <Form.Item name="wagonNumber" label="Wagon Number" style={{ flex: '1 1 200px' }}>
                <Input size="small" />
              </Form.Item>
              <Form.Item name="attributeValue" label="Attribute Value" style={{ flex: '1 1 200px' }}>
                <Input size="small" />
              </Form.Item>
              <Form.Item name="comments" label="Comments" style={{ flex: '1 1 300px' }}>
                <Input.TextArea rows={1} size="small" />
              </Form.Item>
              <Form.Item name="priority" label="Priority" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  <Select.Option value="low">Low</Select.Option>
                  <Select.Option value="medium">Medium</Select.Option>
                  <Select.Option value="high">High</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="status" label="Status" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  <Select.Option value="new">New</Select.Option>
                  <Select.Option value="resolved">Resolved</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="department" label="Department" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  {departments?.map(dept => (
                    <Select.Option key={dept.id} value={dept.id}>
                      {dept.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="surveillanceObject" label="Surveillance Object" style={{ flex: '1 1 200px' }}>
                <Select style={{ width: '100%' }} size="small">
                  {surveillanceObjects?.map(obj => (
                    <Select.Option key={obj.id} value={obj.id}>
                      {obj.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <Form.Item style={{ marginTop: '8px', width: '100%' }}>
              <Space>
                <Button type="primary" htmlType="submit" size="small">
                  Search
                </Button>
                <Button onClick={handleReset} size="small">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
          <div style={{ flex: 1, overflow: 'auto', padding: '12px', width: '100%' }}>
            <Table
              columns={columns}
              dataSource={incidents}
              rowKey="id"
              loading={isLoading}
              pagination={false}
              style={{ marginTop: '12px', width: '100%', fontSize: '12px' }}
              size="small"
            />
          </div>
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
          {selectedIncident && (
            <div style={{ marginTop: '20px' }}>
              <Title level={4}>Additional Information</Title>
              <Table
                columns={[
                  { title: 'Parameter', dataIndex: 'parameter', key: 'parameter' },
                  { title: 'Value', dataIndex: 'value', key: 'value' },
                ]}
                dataSource={[
                  { parameter: 'Incident Number', value: selectedIncident.id },
                  { parameter: 'Date', value: dayjs(selectedIncident.timestamp).format('YYYY-MM-DD') },
                  { parameter: 'Time', value: dayjs(selectedIncident.timestamp).format('HH:mm:ss') },
                  { parameter: 'Group', value: selectedIncident.incidentGroup?.name },
                  { parameter: 'Surveillance Object', value: selectedIncident.surveillanceObject?.name },
                  { parameter: 'Department', value: selectedIncident.department?.name },
                  { parameter: 'Incident Type', value: selectedIncident.incidentType?.name },
                  { parameter: 'Status', value: selectedIncident.status },
                ]}
                pagination={false}
                size="small"
              />
            </div>
          )}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12} style={{ height: 'calc(100vh - 300px)', overflowY: 'auto', padding: '20px' }}>
          {selectedIncident && (
            <>
              <Title level={4}>Surveillance Subject Information</Title>
              <Table
                columns={[
                  { title: 'Name', dataIndex: ['surveillanceObject', 'name'], key: 'name' },
                  { title: 'ID', dataIndex: ['surveillanceObject', 'id'], key: 'id' },
                  { title: 'Type', dataIndex: ['surveillanceObject', 'type'], key: 'type' },
                ]}
                dataSource={[selectedIncident]}
                pagination={false}
                size="small"
              />
              <Title level={4} style={{ marginTop: '20px' }}>Incident History</Title>
              <Table
                columns={historyColumns}
                dataSource={incidentHistory}
                pagination={false}
                size="small"
              />
            </>
          )}
        </Col>
        <Col span={12} style={{ height: 'calc(100vh - 300px)', overflowY: 'auto', padding: '20px' }}>
          {selectedIncident && (
            <>
              <Title level={4}>Media</Title>
              <Radio.Group onChange={(e) => setMediaType(e.target.value)} value={mediaType} style={{ marginBottom: '20px' }}>
                <Radio.Button value="photo">Photo</Radio.Button>
                <Radio.Button value="video">Video</Radio.Button>
              </Radio.Group>
              {mediaType === 'photo' && (
                selectedIncident.images && selectedIncident.images.length > 0 ? (
                  <Space size="large" style={{ marginBottom: '20px' }}>
                    {selectedIncident.images.map((image: string, index: number) => (
                      <Image
                        key={index}
                        src={image}
                        width={200}
                        height={150}
                        alt={`Incident image ${index + 1}`}
                      />
                    ))}
                  </Space>
                ) : (
                  <div style={{ width: 200, height: 150, backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <Text type="secondary">No image available</Text>
                  </div>
                )
              )}
              {mediaType === 'video' && (
                selectedIncident.video ? (
                  <video width="200" height="150" controls>
                    <source src={selectedIncident.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div style={{ width: 200, height: 150, backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text type="secondary">No video available</Text>
                  </div>
                )
              )}
            </>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
