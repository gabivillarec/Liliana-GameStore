import { useEffect } from 'react';
import style from "./DisqusComments.module.css"

const DisqusComments = () => {
  useEffect(() => {
    const loadDisqusScript = () => {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://liliana-gamestore.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    };
    loadDisqusScript();
    return () => {
      const d = document;
      const disqusScript = d.getElementById('disqus_thread');
      if (disqusScript) {
        disqusScript.remove();
      }
    };
  }, []);
  return (
    <div className={style.disqusSize}>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
};

export default DisqusComments;