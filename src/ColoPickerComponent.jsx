import React, { useState, useEffect } from "react";
import {
    AppProvider,
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
        <button
            onClick={handlePopoverOpen}
            style={{
                background: "none",
                color: "none",
                padding: "0",
                font: "none",
                outline: "none",
                border: "none",
            }}
        >
            <div
                style={{
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "0.3rem",
                    background: hexColor,
                }}
            />
        </button>
    );

    return (
        <AppProvider>
            <Popover
                active={popoverActive}
                activator={activator}
                onClose={handlePopoverClose}
            >
                <Popover.Section>
                    <ColorPicker onChange={handleColorChange} color={color} />
                </Popover.Section>
                <Popover.Section>
                    <TextField value={hexColor} onChange={handleHexChange} />
                </Popover.Section>
            </Popover>
        </AppProvider>
    );
};

export default ColorPickerComponent;
