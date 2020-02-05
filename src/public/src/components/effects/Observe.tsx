
//Intersection Observer
export type ObserveCallback = (e:IntersectionObserverEntry)=>void;
export type Observation = {element:HTMLElement,callback:ObserveCallback};
export const observations:Observation[] = [];

export const observer = typeof IntersectionObserver === "function" ? (
  new IntersectionObserver((entries, observer) => {
    [...observations].forEach(ob => {
      entries.forEach(e => {
        if(ob.element != e.target) return;
        ob.callback(e);
      });
    });
  },{})
) : null;

export const addObserve = (ob:Observation) => {
  if(!observer) return;
  observations.push(ob);
  observer.observe(ob.element);//TODO: "Is observing"
}

export const removeObserve = (ob:Observation) => {
  if(!observer) return;
  let i = observations.indexOf(ob);
  if(i !== -1) observations.splice(i, 1);
  observer.unobserve(ob.element); 
}