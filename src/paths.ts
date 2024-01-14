const paths = {
  home(){
    return '/'
  },
  topicShow(topicsSlug:string){
    return `/topics/${topicsSlug}`
  },
  postCreate(topicsSlug:string){
    return `/topics/${topicsSlug}/posts/new`
  },
  postShow(topicsSlug:string,postId:string){
    return `/topics/${topicsSlug}/posts/${postId}`
  }
};

export default paths;
