import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

interface SliderGroupProps {
  progressPercent: number;
}

export const SliderGroup = ({ progressPercent }: SliderGroupProps) => (
  <Slider
    colorScheme="primary"
    aria-label="slider-ex-1"
    defaultValue={progressPercent}
    isReadOnly
  >
    <SliderTrack height="8px" bg="primary.200">
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);
