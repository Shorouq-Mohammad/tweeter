const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            let str= `<div class="post" data-id="${post.id}"><p class="post-text">${post.text}</p><ul class="comments">${renderComments(post.comments)}</ul></div>`
            $("#posts").append(str)
        }
    }
    const renderComments = function(comments){
        let str = ""
        for(let comment of comments){
            str += `<li data-id="${comment.id}">${comment.text}</li>`
        }
        return str
    }
    return {renderPosts}
}