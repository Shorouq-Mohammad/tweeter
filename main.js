const Tweeter = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2;
  let commentIdCounter = 6;
  const getPosts = function () {
    return posts;
  };
  const addPost = (text) => {
    postIdCounter += 1;
    const post = {
      id: `p${postIdCounter}`,
      text: text,
      comments: [],
    };

    posts.push(post);
  };
  const removePost = function (postID) {
    for (let i in posts) {
      if (posts[i].id == postID) {
        posts.splice(i, 1);
        break;
      }
    }
  };
  const addComment = function (text, postID) {
    commentIdCounter += 1;
    const comment = {
      text: text,
      id: `c${commentIdCounter}`,
    };
    for (let i in posts) {
      if (posts[i].id == postID) {
        posts[i].comments.push(comment);
        break;
      }
    }
  };
  const removeComment = function (postID, commentID) {
    for (let i in posts) {
      if (posts[i].id == postID) {
        for (let c in posts[i].comments) {
          if (posts[i].comments[c].id == commentID) {
            posts[i].comments.splice(c, 1);
            break;
          }
        }
        break;
      }
    }
  };
  return { addPost, removePost, getPosts, addComment, removeComment };
};

const tweeter = Tweeter();

tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());

tweeter.removePost("p1");
console.log(tweeter.getPosts());
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.addComment("Damn straight it is!", "p3");
tweeter.addComment("Second the best!", "p2");
console.log(tweeter.getPosts());
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
