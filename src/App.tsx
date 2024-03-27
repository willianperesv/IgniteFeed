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
      { type: 'paragraph', content: 'Fala meus compatriotas!!!! ' },
      { type: 'paragraph', content: 'Acabei de enviar mensagens duvidosas pra todos vocês, não me excluam do grupo' },
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
      { type: 'paragraph', content: 'KKKKKKKKKK ' },
      { type: 'paragraph', content: 'Cheguei a me engasgar com a areia que estava comendo aqui!' },
      { type: 'paragraph', content: 'Faça conexão no meu Linkedin' },
      { type: 'link', content: 'https://www.linkedin.com/in/gabrielftsa/' }
    ],
    publishedAt: new Date('2024-02-20 20:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/240453491_4169775549736996_3723607504710029926_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHs2KZQynO8xQExrqJlRO8BadQxZHTAnORp1DFkdMCc5Gc2LVy7IYLQONbhuy-GUdiFJ7ZtnFBDphG9sfE0hHxv&_nc_ohc=vO7VPLqoDFUAX94vnQV&_nc_ht=scontent-gru2-1.xx&oh=00_AfBEfYrG6SzcxSx46Q20RoE5oYrUv04gkIs4DL9pUxOJIw&oe=65DE6C87",
      name: 'Pedro Guilherme',
      role: 'React Developer',
    },
    content: [
      { type: 'paragraph', content: 'Eai Cambada!! 👋 ' },
      { type: 'paragraph', content: 'É só ouvir o capita que dá bom a gameplay!!' },
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


