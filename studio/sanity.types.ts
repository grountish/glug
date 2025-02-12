/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type FeatureCard = {
  _type: 'featureCard'
  variant?: string
  title?: string
  description?: string
  price?: number
  buttonText?: string
  buttonLink?: string
  illustration?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  backgroundColor?: Color
}

export type InfoCard = {
  _type: 'infoCard'
  title?: string
  text?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      linkType?: 'href' | 'page'
      href?: string
      page?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
      openInNewTab?: boolean
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type InfoWithCTA = {
  _type: 'infoWithCTA'
  firstColumnText?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      linkType?: 'href' | 'page'
      href?: string
      page?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
      openInNewTab?: boolean
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  secondColumnText?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      linkType?: 'href' | 'page'
      href?: string
      page?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
      openInNewTab?: boolean
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  cta?: {
    text?: string
    link?: Link
  }
}

export type CallToAction = {
  _type: 'callToAction'
  heading?: string
  text?: string
  buttonText?: string
  link?: Link
}

export type MainHero = {
  _type: 'mainHero'
  backgroundImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type ImageTextBlock = {
  _type: 'imageTextBlock'
  text?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      linkType?: 'href' | 'page'
      href?: string
      page?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
      openInNewTab?: boolean
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  illustration?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  layout?: 'leftImage' | 'topText' | 'leftTextImageIlustration' | 'rightImageNoText'
}

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>
    text?: string
    _type: 'span'
    _key: string
  }>
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
  listItem?: 'bullet' | 'number'
  markDefs?: Array<{
    linkType?: 'href' | 'page'
    href?: string
    page?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'page'
    }
    openInNewTab?: boolean
    _type: 'link'
    _key: string
  }>
  level?: number
  _type: 'block'
  _key: string
}>

export type Settings = {
  _id: string
  _type: 'settings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  mainNavigation?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    secondColumnNav?: BlockContent
    thirdColumnNav?: BlockContent
    navLinks?: Array<
      {
        _key: string
      } & Link
    >
    _type: 'image'
  }
  footer?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    secondColumnFooter?: BlockContent
    thirdColumnFooter?: BlockContent
    fourthColumnFooter?: BlockContent
    fifthColumnFooter?: BlockContent
    _type: 'image'
  }
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  ogImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    metadataBase?: string
    _type: 'image'
  }
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  heading?: string
  subheading?: string
  pageBuilder?: Array<
    | ({
        _key: string
      } & CallToAction)
    | ({
        _key: string
      } & MainHero)
    | ({
        _key: string
      } & InfoWithCTA)
    | ({
        _key: string
      } & ImageTextBlock)
    | ({
        _key: string
      } & InfoCard)
    | ({
        _key: string
      } & FeatureCard)
  >
}

export type Link = {
  _type: 'link'
  linkType?: 'href' | 'page' | 'navLink'
  urlTitle?: string
  href?: string
  page?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'page'
  }
  navLink?: string
  openInNewTab?: boolean
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Color = {
  _type: 'color'
  hex?: string
  alpha?: number
  hsl?: HslaColor
  hsv?: HsvaColor
  rgb?: RgbaColor
}

export type RgbaColor = {
  _type: 'rgbaColor'
  r?: number
  g?: number
  b?: number
  a?: number
}

export type HsvaColor = {
  _type: 'hsvaColor'
  h?: number
  s?: number
  v?: number
  a?: number
}

export type HslaColor = {
  _type: 'hslaColor'
  h?: number
  s?: number
  l?: number
  a?: number
}

export type SanityAssistInstructionTask = {
  _type: 'sanity.assist.instructionTask'
  path?: string
  instructionKey?: string
  started?: string
  updated?: string
  info?: string
}

export type SanityAssistTaskStatus = {
  _type: 'sanity.assist.task.status'
  tasks?: Array<
    {
      _key: string
    } & SanityAssistInstructionTask
  >
}

export type SanityAssistSchemaTypeAnnotations = {
  _type: 'sanity.assist.schemaType.annotations'
  title?: string
  fields?: Array<
    {
      _key: string
    } & SanityAssistSchemaTypeField
  >
}

export type SanityAssistOutputType = {
  _type: 'sanity.assist.output.type'
  type?: string
}

export type SanityAssistOutputField = {
  _type: 'sanity.assist.output.field'
  path?: string
}

export type SanityAssistInstructionContext = {
  _type: 'sanity.assist.instruction.context'
  reference?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'assist.instruction.context'
  }
}

export type AssistInstructionContext = {
  _id: string
  _type: 'assist.instruction.context'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  context?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: null
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type SanityAssistInstructionUserInput = {
  _type: 'sanity.assist.instruction.userInput'
  message?: string
  description?: string
}

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<
    | {
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }
    | ({
        _key: string
      } & SanityAssistInstructionFieldRef)
    | ({
        _key: string
      } & SanityAssistInstructionContext)
    | ({
        _key: string
      } & SanityAssistInstructionUserInput)
  >
  style?: 'normal'
  listItem?: never
  markDefs?: null
  level?: number
  _type: 'block'
  _key: string
}>

export type SanityAssistInstructionFieldRef = {
  _type: 'sanity.assist.instruction.fieldRef'
  path?: string
}

export type SanityAssistInstruction = {
  _type: 'sanity.assist.instruction'
  prompt?: SanityAssistInstructionPrompt
  icon?: string
  title?: string
  userId?: string
  createdById?: string
  output?: Array<
    | ({
        _key: string
      } & SanityAssistOutputField)
    | ({
        _key: string
      } & SanityAssistOutputType)
  >
}

export type SanityAssistSchemaTypeField = {
  _type: 'sanity.assist.schemaType.field'
  path?: string
  instructions?: Array<
    {
      _key: string
    } & SanityAssistInstruction
  >
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | FeatureCard
  | InfoCard
  | InfoWithCTA
  | CallToAction
  | MainHero
  | ImageTextBlock
  | BlockContent
  | Settings
  | Page
  | Link
  | Slug
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor
  | SanityAssistInstructionTask
  | SanityAssistTaskStatus
  | SanityAssistSchemaTypeAnnotations
  | SanityAssistOutputType
  | SanityAssistOutputField
  | SanityAssistInstructionContext
  | AssistInstructionContext
  | SanityAssistInstructionUserInput
  | SanityAssistInstructionPrompt
  | SanityAssistInstructionFieldRef
  | SanityAssistInstruction
  | SanityAssistSchemaTypeField
export declare const internalGroqTypeReferenceTo: unique symbol
