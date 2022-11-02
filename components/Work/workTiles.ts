export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Here is`,
    title: `what I've been up to`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'Rugby',
    title: '2010- date',
    image: {
      src: '/static/images/rugby.jpeg',
      width: 1200,
      height: 1500,
    },
  },
  {
    description: 'Digital Content Creation',
    title: '2010- date',
    image: {
      src: '/static/images/planner-app.webp',
      width: 800,
      height: 1000,
    },
  },
  {
    description: `I'm currently building`,
    title: 'Your project',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
]
