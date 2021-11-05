//
//       Component: Comments
//       Description:This component displays all the comments of a particular product
//       and also has a input display to take in more comments
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
const Comments = () => {
  return <section
    ref={elem => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';
      scriptElem.setAttribute('repo', 'shahrk/feature-vote-comments');
      scriptElem.setAttribute('issue-term', 'pathname');
      scriptElem.setAttribute('label', 'comments');
      scriptElem.setAttribute('theme', 'github-light');
      elem.innerHTML = '';
      elem.appendChild(scriptElem);
    }}
  />;
};

export default Comments;
