import PostList from "@/components/posts/post-list";
import {fetchPostBySearchTerm} from "@/db/queries/posts";

interface  SearchPageProps{
  searchParams : {
    term :string
  }

}
export default async function SearchPage({searchParams}:SearchPageProps){
  const {term } = searchParams;


  return (
    <div>
      <PostList fetchData={()=>fetchPostBySearchTerm(term)} ></PostList>
    </div>
  )
}
