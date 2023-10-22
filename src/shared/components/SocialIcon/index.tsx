export function SocialIcon({ url, social }: { url: string; social: string }) {
  return (
    <a href={url}>
      <img src={`/icons/${social}.svg`} alt={`Link: ${social}`} />
    </a>
  );
}
