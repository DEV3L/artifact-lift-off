import { Box, Typography } from "@mui/material";

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  cta?: string;
};

export const HeroBanner = ({ title, subtitle, cta }: HeroBannerProps) => (
  <Box
    sx={{
      position: "relative",
      textAlign: "center",
      color: "white",
      backgroundImage: `url(/banner-image.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "60px 0",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    />
    <Typography variant="h2" sx={{ position: "relative", zIndex: 1 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="h5" sx={{ position: "relative", zIndex: 1 }}>
        {subtitle}
      </Typography>
    )}
    {cta && (
      <Typography variant="body1" sx={{ position: "relative", zIndex: 1 }}>
        {cta}
      </Typography>
    )}
  </Box>
);
