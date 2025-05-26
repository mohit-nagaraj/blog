import type { Blog } from '~/.contentlayer/generated'
import { PostCardListView } from '~/components/blog/post-card-list-view'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import type { CoreContent } from '~/types/data'

export function LatestPosts({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-8 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 md:mr-3">Latest</span>
          <button className={'underline underline-offset-4 transition-colors'}>
            <GrowingUnderline data-umami-event="latest-posts">posts</GrowingUnderline>
          </button>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link href={'/'} className="" aria-label="All posts">
            <GrowingUnderline data-umami-event="all-posts">
              <span className="hidden md:inline-block">View all posts</span>
              <span className="md:hidden">More</span> &rarr;
            </GrowingUnderline>
          </Link>
        </div>
      </div>
      <ul className="space-y-12 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-20 md:pt-10">
        {!posts.length && 'No posts found.'}
        {posts.map((post, idx) => (
          <li key={post.slug}>
            <PostCardListView post={post} loading={idx === 0 ? 'eager' : 'lazy'} />
          </li>
        ))}
      </ul>
    </div>
  )
}
