import { useState } from 'react'
import {
  Typography,
  DatePicker,
  TimePicker,
  Button,
  Space,
  Row,
  Col,
  Modal,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PlaybackPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [isExportModalVisible, setIsExportModalVisible] = useState(false)

  const { data: cameras } = Api.camera.findMany.useQuery({})

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date)
  }

  const handleTimeChange = (time: dayjs.Dayjs | null) => {
    setSelectedTime(time)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleFastForward = () => {
    setPlaybackSpeed(playbackSpeed * 2)
  }

  const handleRewind = () => {
    setPlaybackSpeed(playbackSpeed / 2)
  }

  const handleExport = () => {
    setIsExportModalVisible(true)
  }

  const handleExportConfirm = () => {
    // Implement export logic here
    message.success('Footage exported successfully')
    setIsExportModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title level={2}>Playback</Title>
          <Text>
            Review and export recorded footage from a specific date and time.
          </Text>

          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', marginTop: '2rem' }}
          >
            <Space>
              <DatePicker onChange={handleDateChange} />
              <TimePicker onChange={handleTimeChange} />
              <Button type="primary" disabled={!selectedDate || !selectedTime}>
                Load Footage
              </Button>
            </Space>

            <div
              style={{
                background: '#f0f0f0',
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {selectedDate && selectedTime ? (
                <Text>
                  Footage placeholder for {selectedDate.format('YYYY-MM-DD')}{' '}
                  {selectedTime.format('HH:mm:ss')}
                </Text>
              ) : (
                <Text>Select a date and time to load footage</Text>
              )}
            </div>

            <Space>
              <Button onClick={handlePlayPause}>
                <i className={`las ${isPlaying ? 'la-pause' : 'la-play'}`}></i>
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button onClick={handleRewind}>
                <i className="las la-backward"></i>
                Rewind
              </Button>
              <Button onClick={handleFastForward}>
                <i className="las la-forward"></i>
                Fast Forward
              </Button>
              <Text>Speed: {playbackSpeed}x</Text>
              <Button type="primary" onClick={handleExport}>
                <i className="las la-file-export"></i>
                Export Clip
              </Button>
            </Space>

            <Space direction="vertical">
              <Text strong>Available Cameras:</Text>
              {cameras?.map(camera => (
                <Text key={camera.id}>
                  {camera.name} - {camera.location}
                </Text>
              ))}
            </Space>
          </Space>

          <Modal
            title="Export Footage"
            visible={isExportModalVisible}
            onOk={handleExportConfirm}
            onCancel={() => setIsExportModalVisible(false)}
          >
            <p>Are you sure you want to export the current clip?</p>
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}
