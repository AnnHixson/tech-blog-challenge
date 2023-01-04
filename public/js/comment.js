document.getElementById('blogPostId').style.display = "none";

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const blogPostId = document.querySelector('#blogPostId').innerHTML;
    console.log(content);
    console.log(blogPostId);
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, blogPostId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(blogPostId);
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
};
  
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
