import { ActiveBidsIcon, DashboardIcon, EnvelopIcon, HeartIcon, HistoryIcon, MarketPlaceIcon, SettingsIcon, WalletIcon } from "Icons"

const createMenu = (name:string, path:string, icon?: ReactNode) => ({name, path, icon})

export const MARKETPLACE_MENU = [
  createMenu("Dashboard", '/', DashboardIcon),
  createMenu("Market", '/market', MarketPlaceIcon),
  createMenu("Dashboard", '/activeBids', ActiveBidsIcon),
]
export const PROFILE_MENU = [
  createMenu("Wallet", '/wallet', WalletIcon),
  createMenu("My NFTs", '/my-nfts', EnvelopIcon),
  createMenu("Favorites", '/favorites', HeartIcon),
  createMenu("History", '/history', HistoryIcon),
  createMenu("Settings", '/settings', SettingsIcon),
]
