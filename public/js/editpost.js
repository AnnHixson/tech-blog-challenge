document.getElementById('blogPostId').style.display = "none";
document.getElementById('commentsToHide').style.display = "none";

const updateFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#blog-post-title').value.trim();
    
    const content = document.querySelector('#blog-post-content').value.trim();

    const blogPostId = document.querySelector('#blogPostId').innerHTML;
  
    if (title && content) {
      const response = await fetch(`/api/blogposts/${blogPostId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log('Failed to update blog post');
      }
    }
};

const delButtonHandler = async (event) => {
    event.preventDefault();
    const blogPostId = document.querySelector('#blogPostId').innerHTML;

    const getAllComments = await fetch('/api/comments');

    const allComments = await getAllComments.json()

    for (let i = 0; i < allComments.length; i++) {
      if (allComments[i].blog_post_id == blogPostId) {
        console.log(allComments[i])
        const commentDeletion = await fetch(`/api/comments/${allComments[i].id}`, {
            method: 'DELETE',
        });

        if (commentDeletion.ok) {
           console.log(`comment ${allComments[i].id} deleted`);
        } else {
          console.log('Failed to delete comment');
        }
      }
    }

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog post');
      }
    }
};

document
    .querySelector('.update-blog-post-form')
    .addEventListener('submit', updateFormHandler);

document
    .querySelector('#deleteButton')
    .addEventListener('click', delButtonHandler);