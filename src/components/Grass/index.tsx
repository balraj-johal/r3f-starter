/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { GrassShader } from '../../shaders/GrassShader'

type GLTFResult = GLTF & {
  nodes: {
    GrassBladeMesh: THREE.Mesh
  }
}

interface GrassProps {
  count: number;
}

type Props = GrassProps & JSX.IntrinsicElements['group']

export default function Grass({ count, ...props  }: Props) {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF('/GrassBladeBentMore.glb') as GLTFResult

  return (
    <group ref={group} {...props} dispose={null} position={[0, -5, 0]}>
      <instancedMesh geometry={nodes.GrassBladeMesh.geometry} args={[undefined, undefined, count]}>
      <shaderMaterial
        attach="material"
        {...GrassShader}
        uniforms={{ time: { value: 0.0 } }}
      />
      </instancedMesh>
    </group>
  )
}

useGLTF.preload('/GrassBladeBentMore.glb')
