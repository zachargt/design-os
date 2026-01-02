import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Trash2 } from 'lucide-react'

const API_URL = 'http://localhost:3001/api'

interface HeroSection {
  headline: string
  subhead: string
  primaryCta: { label: string; url: string }
  secondaryCta: { label: string; url: string }
  trustBadges: Array<{ icon: string; text: string }>
}

interface ProblemSolution {
  problem: {
    headline: string
    painPoints: Array<{ icon: string; text: string }>
    cta: { label: string; url: string }
  }
  solution: {
    intro: string
    cta: { label: string; url: string }
  }
  benefits: Array<{ icon: string; title: string; description: string }>
}

interface TrustProof {
  socialProof: {
    headline: string
    microCta: { label: string; url: string }
  }
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
  }
  trustBadges: Array<{ icon: string; text: string }>
  differentiation: {
    headline: string
    items: Array<{ text: string }>
  }
  faqs: Array<{ question: string; answer: string }>
}

interface ConversionFooter {
  finalCta: {
    headline: string
    copy: string
    cta: { label: string; url: string }
    proofPoints: Array<{ text: string }>
  }
  footer: {
    address: string
    links: Array<{ label: string; href: string }>
    tagline: string
  }
}

export function CMSAdmin() {
  const [heroData, setHeroData] = useState<HeroSection | null>(null)
  const [problemSolutionData, setProblemSolutionData] = useState<ProblemSolution | null>(null)
  const [trustProofData, setTrustProofData] = useState<TrustProof | null>(null)
  const [footerData, setFooterData] = useState<ConversionFooter | null>(null)

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    try {
      setLoading(true)
      const [hero, problemSolution, trustProof, footer] = await Promise.all([
        fetch(`${API_URL}/hero`).then(r => r.json()),
        fetch(`${API_URL}/problem-solution`).then(r => r.json()),
        fetch(`${API_URL}/trust-proof`).then(r => r.json()),
        fetch(`${API_URL}/conversion-footer`).then(r => r.json()),
      ])

      setHeroData(hero)
      setProblemSolutionData(problemSolution)
      setTrustProofData(trustProof)
      setFooterData(footer)
    } catch (error) {
      setMessage('❌ Error loading data')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const saveSection = async (section: string, data: any) => {
    try {
      setSaving(true)
      const response = await fetch(`${API_URL}/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Save failed')

      setMessage('✅ Changes saved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('❌ Error saving changes')
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-stone-600 dark:text-stone-400">Loading CMS data...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            CMS Admin
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Manage your landing page content
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-6 p-4 bg-lime-100 dark:bg-lime-900/20 border border-lime-300 dark:border-lime-800 rounded-lg text-lime-900 dark:text-lime-100">
            {message}
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="bg-stone-200 dark:bg-stone-900">
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="problem">Problem/Solution</TabsTrigger>
            <TabsTrigger value="trust">Trust/Proof</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          {/* Hero Section Tab */}
          <TabsContent value="hero" className="space-y-6">
            <Card className="p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Hero Section
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Headline
                  </label>
                  <input
                    type="text"
                    value={heroData?.headline || ''}
                    onChange={(e) => setHeroData(prev => prev ? { ...prev, headline: e.target.value } : null)}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Subhead
                  </label>
                  <textarea
                    value={heroData?.subhead || ''}
                    onChange={(e) => setHeroData(prev => prev ? { ...prev, subhead: e.target.value } : null)}
                    rows={3}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      Primary CTA Label
                    </label>
                    <input
                      type="text"
                      value={heroData?.primaryCta?.label || ''}
                      onChange={(e) => setHeroData(prev => prev ? {
                        ...prev,
                        primaryCta: { ...prev.primaryCta, label: e.target.value }
                      } : null)}
                      className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      Primary CTA URL
                    </label>
                    <input
                      type="text"
                      value={heroData?.primaryCta?.url || ''}
                      onChange={(e) => setHeroData(prev => prev ? {
                        ...prev,
                        primaryCta: { ...prev.primaryCta, url: e.target.value }
                      } : null)}
                      className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      Secondary CTA Label
                    </label>
                    <input
                      type="text"
                      value={heroData?.secondaryCta?.label || ''}
                      onChange={(e) => setHeroData(prev => prev ? {
                        ...prev,
                        secondaryCta: { ...prev.secondaryCta, label: e.target.value }
                      } : null)}
                      className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      Secondary CTA URL
                    </label>
                    <input
                      type="text"
                      value={heroData?.secondaryCta?.url || ''}
                      onChange={(e) => setHeroData(prev => prev ? {
                        ...prev,
                        secondaryCta: { ...prev.secondaryCta, url: e.target.value }
                      } : null)}
                      className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Trust Badges
                    </label>
                    <Button
                      onClick={() => {
                        if (heroData) {
                          const newBadges = [...(heroData.trustBadges || []), { icon: 'shield-check', text: 'New Badge' }]
                          setHeroData({ ...heroData, trustBadges: newBadges })
                        }
                      }}
                      size="sm"
                      variant="outline"
                      className="border-stone-300 dark:border-stone-700"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Badge
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {heroData?.trustBadges?.map((badge, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Icon (e.g., shield-check)"
                          value={badge.icon}
                          onChange={(e) => {
                            const newBadges = [...(heroData?.trustBadges || [])]
                            newBadges[index] = { ...newBadges[index], icon: e.target.value }
                            setHeroData(prev => prev ? { ...prev, trustBadges: newBadges } : null)
                          }}
                          className="w-1/3 px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                        />
                        <input
                          type="text"
                          placeholder="Badge text"
                          value={badge.text}
                          onChange={(e) => {
                            const newBadges = [...(heroData?.trustBadges || [])]
                            newBadges[index] = { ...newBadges[index], text: e.target.value }
                            setHeroData(prev => prev ? { ...prev, trustBadges: newBadges } : null)
                          }}
                          className="flex-1 px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                        />
                        <Button
                          onClick={() => {
                            const newBadges = heroData.trustBadges.filter((_, i) => i !== index)
                            setHeroData({ ...heroData, trustBadges: newBadges })
                          }}
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => heroData && saveSection('hero', heroData)}
                  disabled={saving}
                  className="bg-lime-600 hover:bg-lime-700 text-white"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  onClick={fetchAllData}
                  variant="outline"
                  className="border-stone-300 dark:border-stone-700"
                >
                  Reset
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Problem/Solution Tab */}
          <TabsContent value="problem">
            <Card className="p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Problem Section
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Problem Headline
                  </label>
                  <textarea
                    value={problemSolutionData?.problem?.headline || ''}
                    onChange={(e) => setProblemSolutionData(prev => prev ? {
                      ...prev,
                      problem: { ...prev.problem, headline: e.target.value }
                    } : null)}
                    rows={2}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Pain Points
                    </label>
                    <Button
                      onClick={() => {
                        if (problemSolutionData) {
                          const newPoints = [...(problemSolutionData.problem.painPoints || []), { icon: 'layers', text: 'New pain point' }]
                          setProblemSolutionData({
                            ...problemSolutionData,
                            problem: { ...problemSolutionData.problem, painPoints: newPoints }
                          })
                        }
                      }}
                      size="sm"
                      variant="outline"
                      className="border-stone-300 dark:border-stone-700"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Pain Point
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {problemSolutionData?.problem?.painPoints?.map((point, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Icon"
                          value={point.icon}
                          onChange={(e) => {
                            const newPoints = [...(problemSolutionData.problem.painPoints || [])]
                            newPoints[index] = { ...newPoints[index], icon: e.target.value }
                            setProblemSolutionData(prev => prev ? {
                              ...prev,
                              problem: { ...prev.problem, painPoints: newPoints }
                            } : null)
                          }}
                          className="w-1/4 px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                        />
                        <input
                          type="text"
                          placeholder="Pain point description"
                          value={point.text}
                          onChange={(e) => {
                            const newPoints = [...(problemSolutionData.problem.painPoints || [])]
                            newPoints[index] = { ...newPoints[index], text: e.target.value }
                            setProblemSolutionData(prev => prev ? {
                              ...prev,
                              problem: { ...prev.problem, painPoints: newPoints }
                            } : null)
                          }}
                          className="flex-1 px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                        />
                        <Button
                          onClick={() => {
                            const newPoints = problemSolutionData.problem.painPoints.filter((_, i) => i !== index)
                            setProblemSolutionData({
                              ...problemSolutionData,
                              problem: { ...problemSolutionData.problem, painPoints: newPoints }
                            })
                          }}
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4 mt-8">
                Solution Section
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Solution Intro
                  </label>
                  <textarea
                    value={problemSolutionData?.solution?.intro || ''}
                    onChange={(e) => setProblemSolutionData(prev => prev ? {
                      ...prev,
                      solution: { ...prev.solution, intro: e.target.value }
                    } : null)}
                    rows={2}
                    className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
                      Benefits
                    </label>
                    <Button
                      onClick={() => {
                        if (problemSolutionData) {
                          const newBenefits = [...(problemSolutionData.benefits || []), { icon: 'zap', title: 'New Benefit', description: 'Benefit description' }]
                          setProblemSolutionData({ ...problemSolutionData, benefits: newBenefits })
                        }
                      }}
                      size="sm"
                      variant="outline"
                      className="border-stone-300 dark:border-stone-700"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Benefit
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {problemSolutionData?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex gap-2 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            placeholder="Icon"
                            value={benefit.icon}
                            onChange={(e) => {
                              const newBenefits = [...(problemSolutionData.benefits || [])]
                              newBenefits[index] = { ...newBenefits[index], icon: e.target.value }
                              setProblemSolutionData(prev => prev ? { ...prev, benefits: newBenefits } : null)
                            }}
                            className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                          />
                          <input
                            type="text"
                            placeholder="Title"
                            value={benefit.title}
                            onChange={(e) => {
                              const newBenefits = [...(problemSolutionData.benefits || [])]
                              newBenefits[index] = { ...newBenefits[index], title: e.target.value }
                              setProblemSolutionData(prev => prev ? { ...prev, benefits: newBenefits } : null)
                            }}
                            className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                          />
                          <textarea
                            placeholder="Description"
                            value={benefit.description}
                            onChange={(e) => {
                              const newBenefits = [...(problemSolutionData.benefits || [])]
                              newBenefits[index] = { ...newBenefits[index], description: e.target.value }
                              setProblemSolutionData(prev => prev ? { ...prev, benefits: newBenefits } : null)
                            }}
                            rows={2}
                            className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
                          />
                        </div>
                        <Button
                          onClick={() => {
                            const newBenefits = problemSolutionData.benefits.filter((_, i) => i !== index)
                            setProblemSolutionData({ ...problemSolutionData, benefits: newBenefits })
                          }}
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950 self-start"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => problemSolutionData && saveSection('problem-solution', problemSolutionData)}
                  disabled={saving}
                  className="bg-lime-600 hover:bg-lime-700 text-white"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  onClick={fetchAllData}
                  variant="outline"
                  className="border-stone-300 dark:border-stone-700"
                >
                  Reset
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Trust/Proof Tab */}
          <TabsContent value="trust">
            <Card className="p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Edit testimonials, trust badges, differentiation, and FAQs
              </p>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => trustProofData && saveSection('trust-proof', trustProofData)}
                  disabled={saving}
                  className="bg-lime-600 hover:bg-lime-700 text-white"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  onClick={fetchAllData}
                  variant="outline"
                  className="border-stone-300 dark:border-stone-700"
                >
                  Reset
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Footer Tab */}
          <TabsContent value="footer">
            <Card className="p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Edit final CTA and footer content
              </p>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => footerData && saveSection('conversion-footer', footerData)}
                  disabled={saving}
                  className="bg-lime-600 hover:bg-lime-700 text-white"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  onClick={fetchAllData}
                  variant="outline"
                  className="border-stone-300 dark:border-stone-700"
                >
                  Reset
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
