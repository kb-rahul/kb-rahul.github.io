interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Coinbase Chatbot',
    description: `An in-house, LLM-powered chatbot automating ~70% of chat contacts. Enabled personalized, multi-turn interactions and autonomous knowledge retrieval.`,
    imgSrc: '/static/images/coinbase_chatbot.png',
    href: 'https://help.coinbase.com',
  },
  {
    title: 'Bad Actor Guardrails',
    description: `A system to detect agent solicitations through chat and phone channels with >99% precision using LLMs, enhancing security.`,
    imgSrc: '/static/images/bad_actor_guardrails.png',
    href: 'https://help.coinbase.com',
  },
  {
    title: 'Agent Assist',
    description: `Reactive and proactive capabilities providing contextual recommendations to support agents and identify customer issues early.`,
    imgSrc: '/static/images/agent_assist.png',
    href: 'https://help.coinbase.com',
  },
  {
    title: 'Help Center Search',
    description: `LLM-powered search system leveraging Coinbase’s help center knowledge base to deliver real-time, contextual responses.`,
    imgSrc: '/static/images/help_center_search.png',
    href: 'https://help.coinbase.com',
  },
]

export default projectsData
