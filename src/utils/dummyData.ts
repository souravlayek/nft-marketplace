
const createCardObject = (  nftImage: string,
  profileImage: string,
  name: string,
  user: string,
  solValue: number,
  usdValue: number) => ({nftImage,
  profileImage,
  name,
  user,
  solValue,
  usdValue,})
export const JUST_DROPPED_CONTENT = [
  createCardObject("/assets/images/nfts/nft1.jpg", "/assets/images/people/p1.jpg", "Bored Ape", "@doctorStrange", 1.5, 325),
  createCardObject("/assets/images/nfts/nft2.jpg", "/assets/images/people/p2.jpg", "Inner Peace", "@tonyStark", 1.5, 325),
  createCardObject("/assets/images/nfts/nft3.jpg", "/assets/images/people/p3.jpg", "Bull Rider", "@falcon", 1.5, 325),
]
