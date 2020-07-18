import Link from 'next/link'
import { withRouter } from 'next/router'

export default withRouter(({ router }) => {
    return (
        <div>
            <div>{router.query.name}</div>
            <Link href='/'><a>返回首页</a></Link>
        </div>
    )
}
)
