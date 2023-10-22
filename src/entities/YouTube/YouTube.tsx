export default function YouTube({ url }: { url: string }) {
  return (
    <iframe
      width='560'
      height='315'
      style={{ border: '0' }}
      src={url}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
}
