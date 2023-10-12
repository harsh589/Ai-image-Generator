import React, { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { CircularIndeterminate } from "../loadinganimation";
import DisplayPost from "./DisplayPost"; // Replace './DisplayPost' with the correct path to your 'DisplayPost' component file.

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([])

  const postRef = collection(db, "post");

useEffect(()=>{
  if(allPost && search){
    setSearchResult(allPost.filter((item)=>item.user.toLowerCase().includes(search)|| item.prompt.toLowerCase().includes(search)))
  }
},[search])









  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      await getDocs(postRef).then((data) => {
        setAllPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      });
    };
    getPosts();
  }, []);

  return (
    <section className="max-w-7xl max-30px-auto">
      <h1 className="font-extrabold text-[50px]">
       Community <span>ShowCase</span>
      </h1>
     

      <div className="generate-form mt-16">
        <input
          type="text"
          name="search"
          placeholder="search your prompt..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="m-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularIndeterminate />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            
            {search && searchResult ?  searchResult.map(post=><DisplayPost post ={post}/>)
              :
              allPost && allPost.map(post=>(
               <DisplayPost post={post} />
               ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
