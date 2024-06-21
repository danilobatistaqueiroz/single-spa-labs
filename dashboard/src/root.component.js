import Parcel from 'single-spa-react/parcel'

let config = () => System.import("@labs/delivery");

let shared = () => System.import('@labs/shared-auth');

export default function Root(props) {
  shared().then(x => console.log(x.publicApiFunction()));
  return <section>
          {props.name} is mounted!
          <Parcel config={config}></Parcel>
         </section>;
}
