import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the ProfilePhoto component
const ProfilePhotoStyles = {
  base: 'inline-block overflow-hidden rounded-circle',
  size: {
    s: 'w-profile-photo-s h-profile-photo-s',
    m: 'w-profile-photo-m h-profile-photo-m',
    l: 'w-profile-photo-l h-profile-photo-l'
  }
};

// Setup CVA for the ProfilePhoto component
const { base: ProfilePhotoBaseStyles, ...ProfilePhotoVariantsStyles } = ProfilePhotoStyles;
const ProfilePhotoVariants = cva(ProfilePhotoBaseStyles, {
  variants: { ...ProfilePhotoVariantsStyles }
});

// Define type for the ProfilePhoto component
type ProfilePhotoVariantProps = VariantProps<typeof ProfilePhotoVariants>;

// Export
export { ProfilePhotoStyles, ProfilePhotoVariants, type ProfilePhotoVariantProps };
