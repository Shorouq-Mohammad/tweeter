const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

function post() {
  if ($("#input").val()) {
    tweeter.addPost($("#input").val());
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
  }
}

$("#posts").on("click", ".delete", function () {
  tweeter.removePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comment", function () {
  addComment($(this));
});

$("#posts").on("click", ".delete-comment", function () {
  tweeter.removeComment(
    $(this).closest(".post").data().id,
    $(this).closest("div").data().id
  );
  renderer.renderPosts(tweeter.getPosts());
});

$("#input").keypress(function (event) {
  if (event.keyCode == "13") {
    post();
  }
});
function addComment(commentBtn) {
  if (commentBtn.prev("input").val()) {
    tweeter.addComment(
      commentBtn.prev("input").val(),
      commentBtn.closest(".post").data().id
    );
    renderer.renderPosts(tweeter.getPosts());
  }
}
$("#posts").on("keypress",".input",function (event) { 
    if (event.keyCode == "13") {
      addComment($(this).next())
    }
  });

