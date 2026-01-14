const API_URL = 'http://localhost:5000/api';

export interface ContactInquiryData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  product_interest?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export async function submitContactInquiry(
  data: ContactInquiryData
): Promise<ApiResponse<ContactInquiryData>> {
  try {
    const response = await fetch(`${API_URL}/contact/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getContactInquiries(): Promise<ApiResponse<ContactInquiryData[]>> {
  try {
    const response = await fetch(`${API_URL}/contact/inquiries`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
