import { Header } from './components/Header.tsx'
import {Post, PostType } from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/willianperesv.png",
      name: 'Willian Peres',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!! 👋 ' },
      { type: 'paragraph', content: 'Este é meu primeiro projeto em ReactJS, acesse meu Github! ' },
      { type: 'link', content: 'https://github.com/willianperesv' }
    ],
    publishedAt: new Date('2024-02-22 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fzellner.png",
      name: 'Felipe Zellner',
      role: 'Kotlin Senior Enginner',
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal!!!! ' },
      { type: 'paragraph', content: 'Acabei de enviar mensagens usando o Ignite Feed, deixe um like!' },
      { type: 'paragraph', content: 'Faça conexão no meu Linkedin' },
      { type: 'link', content: 'https://www.linkedin.com/in/fzellner/' }
    ],
    publishedAt: new Date('2024-02-21 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/gabrielftsa.png",
      name: 'Gabriel Feitosa',
      role: 'Java Developer',
    },
    content: [
      { type: 'paragraph', content: 'Aloouu meus amigos!' },
      { type: 'paragraph', content: 'Estou chegando por aqui, podem comentar por aqui!' },
      { type: 'paragraph', content: 'Faça conexão no meu Linkedin' },
      { type: 'link', content: 'https://www.linkedin.com/in/gabrielftsa/' }
    ],
    publishedAt: new Date('2024-02-20 20:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/DroopeGu1.png",
      name: 'Pedro Guilherme',
      role: 'React Developer',
    },
    content: [
      { type: 'paragraph', content: 'Olá!! 👋 ' },
      { type: 'paragraph', content: 'Me chamo Pedro e estou no Ignite Feed!!' },
      { type: 'paragraph', content: 'Acesse meu Github para ver meu portifólio' },
      { type: 'link', content: 'https://github.com/DroopeGu1/' }
    ],
    publishedAt: new Date('2024-02-19 20:00:00')
  },

]


export function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                 post={post}
                />)
            })}
          </main>
        </div>
      </div>
    </>
  )
}


