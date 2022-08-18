import React, {Component, useEffect, useState} from 'react';

interface ArticleInfo {
    title: string
    content?: string
}

let switchCount: number = 0

const Article:React.FC<ArticleInfo> = ({title, content = "内容"}) => {
    const [article, setArticle] = useState<ArticleInfo>({title, content})

    useEffect(() =>{
        switchCount += 1
    }, [content])

    useEffect(() => {
        const handler = () => {
            document.title = Math.random().toString()
        }

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <div>
            <p>{article.title}</p>
            <section>{ article.content }</section>
            <p>{switchCount}</p>
            <button onClick={() => setArticle({
                title: "下一篇"
            })}>
                下一篇
            </button>
        </div>
    )
}

export default Article;