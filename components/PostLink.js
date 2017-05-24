import Link from 'next/link'

const PostLink = (props)=> (
  <li>
    <style jsx>
    {`
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }
      a:hover {
        opacity: 0.6;
      }

    `}
    </style>
    <Link
      as={`/p/${props.id}`}
    >
      <a>{props.title}</a>
    </Link>
  </li>
)

export default PostLink
