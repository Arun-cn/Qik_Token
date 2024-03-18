import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import axiosInstance from '../../services/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const QueueForm = () => {
  const [formData, setFormData] = useState({
    queueName: '',
    location: '',
    creatorType: 'User',
    url:''
  });
  
  const notify = (message) => toast(message);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend using Axios
      await axiosInstance.post('/api/v1/queue/create', formData);

      notify("queue created success")
      // Reset the form
      setFormData({
        queueName: '',
        url: '',
        location: ''
      });
    } catch (error) {
      notify("queue created error")
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="queueName">
        <Form.Label>Queue Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter queue name"
          name="queueName"
          value={formData.queueName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="url">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter URL"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <ToastContainer/>
    </Form>
  );
};

export default QueueForm;