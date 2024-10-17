import React, { useState, useEffect } from 'react'
import {
  Typography,
  Row,
  Col,
  Select,
  Slider,
  Button,
  Card,
  Space,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LiveMonitoringPage() {
  const [cameras, setCameras] = useState<any[]>([])
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [trackedIndividuals, setTrackedIndividuals] = useState<string[]>([])

  const { user } = useUserContext()
  const { data: camerasData, isLoading: isCamerasLoading } =
    Api.camera.findMany.useQuery({})
  const { mutateAsync: updateCamera } = Api.camera.update.useMutation()

  useEffect(() => {
    if (camerasData) {
      setCameras(camerasData)
      if (camerasData.length > 0) {
        setSelectedCamera(camerasData[0].id)
      }
    }
  }, [camerasData])

  const handleCameraChange = (value: string) => {
    setSelectedCamera(value)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const handleZoomChange = (value: number) => {
    setZoom(value)
  }

  const handlePanChange = (axis: 'x' | 'y', value: number) => {
    setPan(prev => ({ ...prev, [axis]: value }))
  }

  const handleTrackIndividual = () => {
    const individual = prompt('Enter the name of the individual to track:')
    if (individual && !trackedIndividuals.includes(individual)) {
      setTrackedIndividuals(prev => [...prev, individual])
      message.success(`Now tracking ${individual}`)
    }
  }

  const handleRemoveTracking = (individual: string) => {
    setTrackedIndividuals(prev => prev.filter(i => i !== individual))
    message.success(`Stopped tracking ${individual}`)
  }

  const saveSettings = async () => {
    if (selectedCamera) {
      try {
        await updateCamera({
          where: { id: selectedCamera },
          data: { status: JSON.stringify({ zoom, pan }) },
        })
        message.success('Camera settings saved successfully')
      } catch (error) {
        message.error('Failed to save camera settings')
      }
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2}>Live Monitoring</Title>
          <Text>Monitor and control camera feeds in real-time.</Text>

          <Card style={{ marginTop: 20 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select
                style={{ width: '100%' }}
                placeholder="Select a camera"
                onChange={handleCameraChange}
                value={selectedCamera}
                loading={isCamerasLoading}
              >
                {cameras.map(camera => (
                  <Select.Option key={camera.id} value={camera.id}>
                    {camera.name || `Camera ${camera.id}`}
                  </Select.Option>
                ))}
              </Select>

              {selectedCamera && (
                <>
                  <div
                    style={{
                      border: '1px solid #d9d9d9',
                      height: '300px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>Camera Feed Placeholder</Text>
                  </div>

                  <Title level={4}>Camera Controls</Title>
                  <Text>Zoom:</Text>
                  <Slider
                    min={1}
                    max={5}
                    step={0.1}
                    value={zoom}
                    onChange={handleZoomChange}
                  />

                  <Text>Pan X:</Text>
                  <Slider
                    min={-100}
                    max={100}
                    value={pan.x}
                    onChange={value => handlePanChange('x', value)}
                  />

                  <Text>Pan Y:</Text>
                  <Slider
                    min={-100}
                    max={100}
                    value={pan.y}
                    onChange={value => handlePanChange('y', value)}
                  />

                  <Button onClick={saveSettings} type="primary">
                    Save Camera Settings
                  </Button>
                </>
              )}

              <Title level={4}>Tracked Individuals</Title>
              <Button
                onClick={handleTrackIndividual}
                icon={<i className="las la-user-plus" />}
              >
                Track New Individual
              </Button>

              {trackedIndividuals.map(individual => (
                <Card key={individual} size="small" style={{ marginTop: 10 }}>
                  <Row justify="space-between" align="middle">
                    <Col>
                      <Text>{individual}</Text>
                    </Col>
                    <Col>
                      <Button
                        danger
                        icon={<i className="las la-times" />}
                        onClick={() => handleRemoveTracking(individual)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
