const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            let str= `<div class="post" data-id="${post.id}">
            <p class="post-text">${post.text}</p>
            <div class="comments">${renderComments(post.comments)}<br>
            <input type="text" placeholder="Got something to say?" class="input">
            <button class="comment">Comment</button></div><br>
            <button class="delete">Delete Post</button>
            </div>`
            $("#posts").append(str)
        }
    }
    const renderComments = function(comments){
        let str = ""
        for(let comment of comments){
            str += `<div data-id="${comment.id}">
            <span class="delete-comment">X</span>
            <span> ${comment.text}</span></div>`
        }
        return str
    }
    return {renderPosts}
}