
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


const createSellerProfileObject = (
  profileImage: string,
  name: string,
  userType: string,
  isActive: boolean) => ({profileImage,
    name,
    userType,
    isActive})


export const JUST_DROPPED_CONTENT = [
  createCardObject("/assets/images/nfts/nft1.jpg", "/assets/images/people/p1.jpg", "Bored Ape", "@doctorStrange", 1.5, 325),
  createCardObject("/assets/images/nfts/nft2.jpg", "/assets/images/people/p2.jpg", "Inner Peace", "@tonyStark", 1.5, 325),
  createCardObject("/assets/images/nfts/nft3.jpg", "/assets/images/people/p3.jpg", "Bull Rider", "@falcon", 1.5, 325),
]

export const TOP_SELLERS = [
  createSellerProfileObject("/assets/images/people/p1.jpg", "@xsullo", "5K NFTs sold", false),
  createSellerProfileObject("/assets/images/people/p2.jpg", "@jenny", "4.7K NFTs sold", true),
  createSellerProfileObject("/assets/images/people/p3.jpg", "@rob", "4.5K NFTs sold", false),
  createSellerProfileObject("/assets/images/people/p4.jpg", "@bunny", "4K NFTs sold", false),
  createSellerProfileObject("/assets/images/people/p1.jpg", "@strange", "5K NFTs sold", true),
  createSellerProfileObject("/assets/images/people/p2.jpg", "@robert", "4.7K NFTs sold", false),
  createSellerProfileObject("/assets/images/people/p3.jpg", "@johney", "4.5K NFTs sold", true),
  createSellerProfileObject("/assets/images/people/p4.jpg", "@christopher", "4K NFTs sold", true),
]
