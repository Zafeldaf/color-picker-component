import React, { useState, useEffect } from "react";
import {
    AppProvider,
    Button,
    Popover,
    ColorPicker,
    TextField,
    hsbToRgb,
    rgbToHsb,
    rgbToHex,
    hexToRgb,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

const ColorPickerComponent = () => {
    const [color, setColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.8,
    });

    const [popoverActive, setPopoverActive] = useState(false);
    const [hexColor, setHexColor] = useState(
        rgbToHex(hsbToRgb(color)) || "#000000"
    );

    useEffect(() => {
        // Update color when hexColor changes
        const rgbColor = hexToRgb(hexColor);
        if (rgbColor) {
            const newColor = rgbToHsb(rgbColor);
            setColor(newColor);
        }
    }, [hexColor]);

    const handleColorChange = (newColor) => {
        setColor(newColor);
        setHexColor(rgbToHex(hsbToRgb(newColor)) || "#000000");
    };

    const handleHexChange = (value) => {
        setHexColor(value);
    };

    const handlePopoverClose = () => {
        setPopoverActive(false);
    };

    const handlePopoverOpen = () => {
        setPopoverActive(true);
    };

    const activator = (
        <Button onClick={handlePopoverOpen}>
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "0.3rem",
                    background: hexColor,
                }}
            />
            <span>Primary color</span>
        </Button>
    );

    return (
        <AppProvider>
            <Popover
                active={popoverActive}
                activator={activator}
                onClose={handlePopoverClose}
            >
                <Popover.Section>
                    <ColorPicker
                        onChange={handleColorChange}
                        color={color}
                        allowAlpha
                    />
                </Popover.Section>
                <Popover.Section>
                    <TextField value={hexColor} onChange={handleHexChange} />
                </Popover.Section>
            </Popover>
        </AppProvider>
    );
};

export default ColorPickerComponent;
