
import { nanoid } from 'nanoid'

export interface JobQuestion {
    id: string
    label: string
    type: 'short' | 'long' | 'email' | 'phone' | 'file'
    required: boolean
}

export interface Job {
    id: string
    title: string
    description: string
    status: 'draft' | 'published' | 'closed'
    slug: string
    location: 'remote' | 'onsite' | 'hybrid'
    type?: 'full_time' | 'part_time' | 'internship' | 'contract'
    duration?: string
    department?: string
    salaryMin?: number
    salaryMax?: number
    salaryCurrency?: string
    showSalary?: boolean
    closedTitle?: string
    closedMessage?: string
    sections?: Array<{ id: string, title?: string, bullets: string[] }>
    questions: JobQuestion[]
    applicationCount: number
    createdAt: any
}

const VITE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function getPublishedJobs() {
    const response = await fetch(`${VITE_API_URL}/api/jobs/public`)

    if (!response.ok) throw new Error('Failed to fetch jobs')
    return await response.json()
}

export async function getJobBySlug(slug: string) {
    const response = await fetch(`${VITE_API_URL}/api/jobs/public?slug=${slug}`)

    if (!response.ok) {
        if (response.status === 404) return null // Job not found
        throw new Error('Failed to fetch job')
    }
    return await response.json()
}

/**
 * Submit application.
 * Resume is uploaded to Storage — path is stored in Firestore.
 * getDownloadURL is NOT called here (requires auth).
 * Admin generates the signed URL on their end when viewing applications.
 */
export async function submitApplication(
    job: Job,
    data: {
        name: string
        email: string
        phone: string
        resumeFile: File
        answers: Record<string, string>
    }
): Promise<string> {
    const formData = new FormData()
    formData.append('jobId', job.id)
    formData.append('jobTitle', job.title)
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('resume', data.resumeFile)
    formData.append('answers', JSON.stringify(data.answers))

    const response = await fetch(`${VITE_API_URL}/api/jobs/apply`, {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        throw new Error('Failed to submit application via API')
    }

    const result = await response.json()
    return result.appId || 'submitted'
}

/**
 * DUPLICATE SUBMISSION GUARD
 * Use this in JobDetails.tsx instead of a plain boolean flag.
 * Stores submitted jobIds in sessionStorage so refresh/retry doesn't resubmit.
 */
export function markSubmitted(jobId: string) {
    const key = `submitted_${jobId}`
    sessionStorage.setItem(key, '1')
}

export function wasSubmitted(jobId: string): boolean {
    return sessionStorage.getItem(`submitted_${jobId}`) === '1'
}
