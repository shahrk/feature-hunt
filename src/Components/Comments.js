const Comments = () => {
  return <section
    ref={elem => {
      console.log(elem);
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.crossOrigin = "anonymous";
      scriptElem.setAttribute("repo", "shahrk/feature-vote-comments");
      scriptElem.setAttribute("issue-term", "pathname");
      scriptElem.setAttribute("label", "comments");
      scriptElem.setAttribute("theme", "github-light");
      elem.innerHTML = '';
      elem.appendChild(scriptElem);
    }}
  />
}

export default Comments