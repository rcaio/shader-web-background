/*
 * Copyright 2020  Kazimierz Pogoda
 *
 * This file is part of shader-web-background.
 *
 * shader-web-background is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * shader-web-background is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with shader-web-background.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @fileoverview Public API of shader-web-background.js
 *
 * @externs
 */
"use strict";

const shaderWebBackground = {};

/**
 * @typedef {
 *   function(!WebGLUniformLocation, (!WebGLTexture|!DoubleBuffer))
 * }
 */
var TextureBinder;

/**
 * @typedef {{
 *   canvas:          !HTMLCanvasElement,
 *   width:           !number,
 *   height:          !number,
 *   cssPixelRatio:   !number,
 *   cssWidth:        !number,
 *   cssHeight:       !number,
 *   isOverShader:    !function(!number, !number): !boolean,
 *   getCoordinateX:  !function(!number): !number,
 *   getCoordinateY:  !function(!number): !number,
 *   buffers:         !Object<string, !DoubleBuffer>,
 *   texture:         !TextureBinder
 * }}
 */
var Context;

/**
 * @typedef {
 *   function(!WebGLRenderingContext)
 * }
 */
var TextureInitializer;

/**
 * @typedef {
 *   function(!WebGLRenderingContext, !WebGLUniformLocation, Context=)
 * }
 */
var UniformSetter;

/**
 * @typedef {
 *   Object<string, !UniformSetter>
 * }
 */
var UniformSetters;

/**
 * @typedef {{
 *   texture:  (TextureInitializer|undefined),
 *   uniforms: (UniformSetters|undefined)
 * }}
 */
var Shader;

/**
 * @typedef {{
 *   canvas:          (HTMLCanvasElement|undefined),
 *   fallback:        (boolean|undefined),
 *   onInit:          (function(Context=)|undefined),
 *   onResize:        (function(!number, !number, Context=)|undefined),
 *   onBeforeFrame:   (function(Context=)|undefined),
 *   shaders:         (!Object<string, !Shader>),
 *   onFrameComplete: (function()|undefined),
 * }}
 */
var Config;

/**
 * Indicates misconfiguration.
 */
shaderWebBackground.ConfigError = class extends Error {}

/**
 * Indicates WebGL problems.
 */
shaderWebBackground.GlError = class extends Error {}

/**
 * Will start shading.
 *
 * @param {!Config} config
 * @return {!Context} the shading context object
 * @throws {shaderWebBackground.ConfigError}
 * @throws {shaderWebBackground.GlError}
 */
shaderWebBackground.shade = function(config) {}
