
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { CollectionPoint, materialColors } from '@/types/collection-point';
import GoogleMapsLogo from '/lovable-uploads/a1df8b37-7951-4f7c-ac22-ae1e6b74cae7.png';
import WazeLogo from '/lovable-uploads/a68261e0-b526-48e8-9c3b-902d722edaf4.png';

interface CollectionPointCardProps {
  point: CollectionPoint;
  selectedPoint?: CollectionPoint;
  onToggleSelect?: (point: CollectionPoint) => void;
}

const CollectionPointCard = ({ 
  point, 
  selectedPoint, 
  onToggleSelect 
}: CollectionPointCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-recicla-primary dark:text-recicla-secondary">
          {point.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{point.description}</p>
      </div>

      <div className="space-y-2 text-sm">
        <p className="flex items-start">
          <span className="font-semibold mr-2">Endereço:</span>
          <span className="text-gray-600 dark:text-gray-300">{point.address}</span>
        </p>
        
        <p className="flex items-center">
          <span className="font-semibold mr-2">Telefone:</span>
          <span className="text-gray-600 dark:text-gray-300">{point.phone}</span>
        </p>

        {point.website && (
          <p className="flex items-center">
            <span className="font-semibold mr-2">Website:</span>
            <a 
              href={point.website.startsWith('http') ? point.website : `https://${point.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              {point.website}
              <ExternalLink size={12} className="ml-1" />
            </a>
          </p>
        )}
      </div>

      <div className="mt-3">
        <p className="font-semibold mb-1">Materiais Aceitos:</p>
        <div className="flex flex-wrap gap-1">
          {point.materials.map((material) => (
            <Badge 
              key={material} 
              variant="outline" 
              className={materialColors[material]}
            >
              {material}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${point.latitude},${point.longitude}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
        >
          <img 
            src={GoogleMapsLogo} 
            alt="Google Maps" 
            className="w-6 h-6 mr-2" 
          />
          Google Maps
        </a>
        <a 
          href={`https://waze.com/ul?ll=${point.latitude},${point.longitude}&navigate=yes`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full hover:bg-teal-200 transition-colors"
        >
          <img 
            src={WazeLogo} 
            alt="Waze" 
            className="w-6 h-6 mr-2" 
          />
          Waze
        </a>
      </div>
    </div>
  );
};

export default CollectionPointCard;
