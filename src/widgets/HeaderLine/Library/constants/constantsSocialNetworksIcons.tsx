import type { ReactNode } from "react";

import { TelegramTwoToneIcon } from "@/src/shared/UI/icons/SocialNetworksGroup/TelegramTwoToneIcon";
import { VkTwoToneIcon } from "@/src/shared/UI/icons/SocialNetworksGroup/VkTwoToneIcon";
import { WhatsAppTwoToneIcon } from "@/src/shared/UI/icons/SocialNetworksGroup/WhatsAppTwoToneIcon";

export enum ESocialNetwork {
  Telegram = "telegram",
  WhatsApp = "whats-app",
  Vk = "vk",
}

export const constantSocialNetworkIcons: Record<ESocialNetwork, ReactNode> = {
  [ESocialNetwork.Telegram]: <TelegramTwoToneIcon />,
  [ESocialNetwork.WhatsApp]: <WhatsAppTwoToneIcon />,
  [ESocialNetwork.Vk]: <VkTwoToneIcon />,
};
