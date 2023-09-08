import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Here I use the names of the icons I've added on Fontawesome's website.
type CustomIconName = "my-icon-1" | "my-icon-2" | "my-icon-3";

// A type to indicate we'll be using a custom icon instead of a
// standard FontAwesome icon
export type CustomIconDefinition = {
  prefix: "fa-kit";
  iconName: CustomIconName;
};

// a Union type so we can use this component both for
// standard icons and custom icons.
export type KitIconDefinition = IconDefinition | CustomIconDefinition;

type Props = {
  icon: KitIconDefinition;
};

export default function FontAwesomeKitIcon({ icon }: Props) {
  if (icon.prefix === "fa-kit") {
    return <i className={`fa-kit fa-${icon.iconName}`} />;
  } else {
    return <FontAwesomeIcon icon={icon} />;
  }
}
