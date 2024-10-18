import React, { useState } from 'react'
import { Table, Button, Radio, Typography, Space, Row, Col, Pagination } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DispatcherPage() {
  const [selectedIncident, setSelectedIncident] = useState(null)
  const [videoMode, setVideoMode] = useState('photo')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10 // Constant number of entries per page

  const { data: incidents, isLoading } = Api.incident.findMany.useQuery({
    include: {
      incidentGroup: true,
      incidentType: true,
      surveillanceObject: true,
      camera: true,
    },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  })

  const { mutateAsync: updateIncident } = Api.incident.update.useMutation()

  const columns = [
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: text => dayjs(text).format('DD.MM.YY HH:mm'),
    },
    {
      title: 'Group',
      dataIndex: ['incidentGroup', 'name'],
      key: 'group',
    },
    {
      title: 'Last Incident Type',
      dataIndex: ['incidentType', 'name'],
      key: 'lastIncidentType',
    },
    {
      title: 'Additional Info',
      dataIndex: 'description',
      key: 'additionalInfo',
    },
    {
      title: 'Surveillance Object',
      dataIndex: ['surveillanceObject', 'name'],
      key: 'surveillanceObject',
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
  ]

  const parameterColumns = [
    {
      title: 'Parameter',
      dataIndex: 'parameter',
      key: 'parameter',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ]

  const handleIncidentClick = record => {
    setSelectedIncident(record)
  }

  const handleAcceptExecution = async () => {
    if (selectedIncident) {
      await updateIncident({
        where: { id: selectedIncident.id },
        data: { status: 'In Progress' },
      })
    }
  }

  const handleIgnoreUntilEndOfShift = async () => {
    if (selectedIncident) {
      await updateIncident({
        where: { id: selectedIncident.id },
        data: { status: 'Ignored' },
      })
    }
  }

  const handleClose = () => {
    setSelectedIncident(null)
  }

  const handleStartTracking = () => {
    // Implement start tracking logic
  }

  const handleViewHistory = () => {
    // Implement view history logic
  }

  const getParameterData = incident => {
    return [
      {
        parameter: 'Time',
        value: dayjs(incident.timestamp).format('DD.MM.YY HH:mm'),
      },
      {
        parameter: 'Registration Date',
        value: dayjs(incident.createdAt).format('DD.MM.YYYY'),
      },
      { parameter: 'Vehicle Number', value: incident.description || 'N/A' },
      { parameter: 'Purpose', value: 'Exit' },
      { parameter: 'Camera', value: incident.camera?.name || 'N/A' },
      { parameter: 'Notes', value: 'Manual Check' },
    ]
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Incident Log</Title>
      <Text>Track all events occurring in the system</Text>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Table
            dataSource={incidents}
            columns={columns}
            rowKey="id"
            pagination={false}
            onRow={record => ({
              onClick: () => handleIncidentClick(record),
            })}
          />
          <Pagination
            current={currentPage}
            total={1000} // Replace with actual total count of incidents
            pageSize={pageSize}
            onChange={setCurrentPage}
            style={{ marginTop: '16px', textAlign: 'right' }}
          />
        </Col>
        <Col span={8}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button
              onClick={handleAcceptExecution}
              disabled={!selectedIncident}
            >
              Accept for Execution
            </Button>
            <Button
              onClick={handleIgnoreUntilEndOfShift}
              disabled={!selectedIncident}
            >
              Ignore Until End of Shift
            </Button>
            {selectedIncident && (
              <>
                <Table
                  dataSource={getParameterData(selectedIncident)}
                  columns={parameterColumns}
                  pagination={false}
                  size="small"
                />
                <Button onClick={handleStartTracking}>Start Tracking</Button>
                <Button onClick={handleViewHistory}>View History</Button>
              </>
            )}
            {selectedIncident && (
              <div style={{ marginTop: '16px' }}>
                <div
                  style={{
                    height: '200px',
                    backgroundColor: '#f0f0f0',
                    marginBottom: '8px',
                  }}
                >
                  {/* Placeholder for video/photo content */}
                  <Text>Video/Photo Content</Text>
                </div>
                <Radio.Group
                  onChange={e => setVideoMode(e.target.value)}
                  value={videoMode}
                  style={{ marginBottom: '8px' }}
                >
                  <Radio.Button value="photo">Photo Mode</Radio.Button>
                  <Radio.Button value="video">Video Mode</Radio.Button>
                </Radio.Group>
                <Button onClick={handleClose}>Close</Button>
              </div>
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
