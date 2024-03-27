import { format, formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


// ESTADO -> Variaveis que estão sob monitoramento do componente

interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface PostProps {
  post: PostType;
}

export function Post({post}: PostProps) {

    //states
    const [comments, setComments] = useState(['Post muito legal, hein?!'])

    const [newCommentText, setNewCommentText] = useState('')

    // https://date-fns.org/v2.28.0/docs/format
    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {locale:ptBR})

    const publishedAtDateRelativeToNow = formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true })

    // function states
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentWithoutDeletedOne);
    }
    
    const isNewCommentEmpty = newCommentText.length == 0

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true}
                        src={post.author.avatarUrl}
                        alt=""
                    />

                    <div className={style.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>

                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>{publishedAtDateRelativeToNow} </time>
            </header>
            <div className={style.content}>
                {post.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}>
                            <a href="#">{line.content}</a>
                        </p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>
    )
}