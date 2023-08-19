import { useBox } from '@react-three/cannon'

export default function Cube ({ id, position, texture }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))
  return (
    <mesh ref={ref}>
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' color='black' />
    </mesh>
  )
}
