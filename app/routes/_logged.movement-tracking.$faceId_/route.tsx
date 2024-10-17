import React, { useState, useEffect } from 'react'
import { Typography, Timeline, Card, Button, Row, Col, Spin } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MovementTrackingPage() {
  const { faceId } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { data: incidents, isLoading } = Api.incident.findMany.useQuery({
    where: { surveillanceObjectId: faceId },
    include: { camera: true },
    orderBy: { timestamp: 'asc' },
  })

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && incidents && currentIndex < incidents.length - 1) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, incidents, currentIndex])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Movement Tracking</Title>
        <Text>
          Track the movement of an individual through different camera feeds.
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={12}>
            <Card title="Visual Route">
              {incidents && incidents[currentIndex] && (
                <div>
                  <img
                    src={
                      incidents[currentIndex].camera?.location ||
                      'https://via.placeholder.com/400x300'
                    }
                    alt={`Camera feed ${currentIndex + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Text strong>{incidents[currentIndex].camera?.name}</Text>
                </div>
              )}
              <div style={{ marginTop: '16px' }}>
                <Button
                  onClick={handlePlayPause}
                  icon={
                    <i
                      className={`las ${isPlaying ? 'la-pause' : 'la-play'}`}
                    ></i>
                  }
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  onClick={handleReset}
                  icon={<i className="las la-redo-alt"></i>}
                  style={{ marginLeft: '8px' }}
                >
                  Reset
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Movement Timeline">
              <Timeline>
                {incidents?.map((incident, index) => (
                  <Timeline.Item
                    key={incident.id}
                    color={index === currentIndex ? 'blue' : 'gray'}
                  >
                    <Text strong>{incident.camera?.name}</Text>
                    <br />
                    <Text>
                      {dayjs(incident.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
