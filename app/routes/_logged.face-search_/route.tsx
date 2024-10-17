import React, { useState } from 'react'
import { Typography, Upload, List, Button, Space, Modal } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FaceSearchPage() {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedResult, setSelectedResult] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const navigate = useNavigate()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: searchFace } = Api.ai.generateText.useMutation()

  const handleUpload = async (options: any) => {
    const { file } = options
    try {
      const { url } = await upload({ file })
      setFileList([{ uid: '1', name: file.name, status: 'done', url }])

      // Simulating face search results
      const searchPrompt = `Search for face matches in recorded footage for image: ${url}`
      const { answer } = await searchFace({ prompt: searchPrompt })

      // Parse the answer and set search results
      const parsedResults = JSON.parse(answer)
      setSearchResults(parsedResults)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const showVideoClip = (result: any) => {
    setSelectedResult(result)
    setIsModalVisible(true)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Face Search</Title>
        <Paragraph>
          Upload an image of a face to search for matches in the recorded
          footage. You can view a list of all instances where the searched face
          appears and click on any result to view the corresponding video clip.
        </Paragraph>

        <Upload
          fileList={fileList}
          customRequest={handleUpload}
          accept="image/*"
          maxCount={1}
          listType="picture"
        >
          <Button icon={<i className="las la-upload"></i>}>
            Upload Face Image
          </Button>
        </Upload>

        {searchResults.length > 0 && (
          <List
            header={<Title level={4}>Search Results</Title>}
            dataSource={searchResults}
            renderItem={item => (
              <List.Item>
                <Space>
                  <Text>
                    <i className="las la-camera"></i> Camera: {item.camera}
                  </Text>
                  <Text>
                    <i className="las la-clock"></i> Timestamp:{' '}
                    {dayjs(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                  </Text>
                  <Button onClick={() => showVideoClip(item)}>View Clip</Button>
                </Space>
              </List.Item>
            )}
          />
        )}

        <Modal
          title="Video Clip"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {selectedResult && (
            <div>
              <p>Camera: {selectedResult.camera}</p>
              <p>
                Timestamp:{' '}
                {dayjs(selectedResult.timestamp).format('YYYY-MM-DD HH:mm:ss')}
              </p>
              <video width="100%" controls>
                <source src={selectedResult.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </Modal>
      </div>
    </PageLayout>
  )
}
