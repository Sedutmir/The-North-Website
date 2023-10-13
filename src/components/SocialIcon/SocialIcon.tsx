export default function SocialIcon({ url: string, social: string }) {
  return (
    <a href={url}>
      <img src={`../../assets/icons/${social}.svg`} alt={`Link: ${social}`} />
    </a>
  )
}
